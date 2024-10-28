import Notification from '../models/notificationModel.js'

export const createNotification = async (reciever, message, type) => {
    try {
        const newNotification = new Notification({
            userId: reciever,
            message: message,
            type: type
        });
        return await newNotification.save();
    } catch (err) {
        throw err
    }
}