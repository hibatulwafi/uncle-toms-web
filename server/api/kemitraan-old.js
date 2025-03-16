// server/api/kemitraan.js
import fs from 'fs/promises';
import path from 'path';
import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const filePath = path.resolve('public/json/data-kemitraan.json');

  if (event.node.req.method === 'POST') {
    try {
      const body = await readBody(event);
      let data = [];

      try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        data = JSON.parse(fileContent);
      } catch (readError) {
        // Jika file tidak ada atau kosong, biarkan data tetap array kosong
      }

      data.push(body);
      await fs.writeFile(filePath, JSON.stringify(data, null, 2));

      return { success: true, message: 'Data kemitraan berhasil disimpan.' };
    } catch (error) {
      console.error('Error saving data:', error);
      return { success: false, message: 'Gagal menyimpan data kemitraan.', error: error.message };
    }
  } else if (event.node.req.method === 'GET') {
    try {
      const fileContent = await fs.readFile(filePath, 'utf8');
      const data = JSON.parse(fileContent);
      return data;
    } catch (error) {
      console.error('Error reading data:', error);
      return [];
    }
  } else {
    return { success: false, message: 'Method tidak diizinkan.' };
  }
});