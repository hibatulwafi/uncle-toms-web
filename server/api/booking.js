// server/api/kemitraan.js
import { defineEventHandler, readBody } from 'h3';
import { db } from '../../firebaseConfig'; // Sesuaikan path
import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';

export default defineEventHandler(async (event) => {
  const bookingCollection = collection(db, 'booking');

  if (event.node.req.method === 'POST') {
    try {
      const body = await readBody(event);
      // Tambahkan timestamp server
      body.timestamp = serverTimestamp();
      await addDoc(bookingCollection, body);
      return { success: true, message: 'Booking berhasil.' };
    } catch (error) {
      console.error('Error saving data:', error);
      return { success: false, message: 'Gagal menyimpan data.', error: error.message };
    }
  } else if (event.node.req.method === 'GET') {
    try {
      const querySnapshot = await getDocs(bookingCollection);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return data;
    } catch (error) {
      console.error('Error reading data:', error);
      return [];
    }
  } else {
    return { success: false, message: 'Method tidak diizinkan.' };
  }
});