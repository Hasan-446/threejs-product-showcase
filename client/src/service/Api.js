import React from "react";
import axios from "axios";

const URL = "http://localhost:8080"

export const addOrder = async (data) => {
    try {
        return await axios.post(`${URL}/addOrder`, data)
    } catch (error) {
        console.log("there was error to post order data", error);
    }
};

export const allOrder = async () => { 
    try {
        return await axios.get(`${URL}/allOrder`)
    } catch (error) {
        console.log("there was error to load order data", error);
    }
}