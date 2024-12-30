import sendNotification from "./send.service.js"


export const testNotificationsController = async(req,res)=>{
    
    const  payload  = req.body

    const response = await new sendNotification().sendNotification(payload)

    return res.status(200).send(response)

}