import { createNotification } from "../repositorys/notificationRepository.js";

export const sendNotification = async (reciever, message, type) => {
    try{
        if((!reciever || reciever === '') || (!message || message === '') || (!type || type === '')){
            const error = new Error('Invalide credentials for notification');
            error.status = 400;
            throw error
        }
        const notification = await createNotification(reciever, message, type);
        if(!notification){
            const error = new Error("Notification dosn't created");
            error.status = 400;
            throw error
        }
    }catch(err){
        throw err
    }
}