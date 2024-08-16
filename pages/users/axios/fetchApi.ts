import { API_URL } from "../config/config";
import axios from 'axios';

export const fetchApi = async(token: any) => {
    if (!token) return null; 
    try {
        const res = await axios.get(API_URL.main, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error: any) {
        console.error('Error fetching data:', error.message);
        throw error; 
    }
};
