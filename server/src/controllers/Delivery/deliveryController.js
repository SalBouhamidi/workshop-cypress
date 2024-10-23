import { changeDeliveryStatus, getDelivery } from '../../repositorys/deliveryRepository.js'

export const confirmCommand = async (req, res) => {
    try{
        const { deliveryId } = req.body;
        await changeDeliveryStatus(deliveryId, 'on_the_way')
        return res.status(200).json({
            message: "Command confirmed"
        })
    }catch(err){        
        if(err.status){
            return res.status(err.status).json({
                error: err.message
            })
        }
        res.status(500).json({
            error: 'server error'
        })
    }
}

export const fetchTheCommands = async (req, res) => {
    try{
        const commands = await getDelivery();
        return res.status(200).json({
            commands: commands
        })
    }catch(err){
        if(err.status){
            return res.status(err.status).json({
                error: err.message
            })
        }
        res.status(500).json({
            error: 'server error'
        })
    }
}