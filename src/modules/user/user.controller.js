import { userModel } from "../../../database/model/user.model.js"
import Stripe from 'stripe';


const stripe = new Stripe('sk_test_51RP9hN044uBAHJFxmVsuuTcAf2Sw2nStbTYhCC42p9maFSULOWxpo7DrYT4GMS2IXvWh5smmYpeTt4vMzv0SCTAE00odH4cQl3');

const register = (async (req, res) => {
    const { name, email, payment, phone } = req.body;
    const user = await userModel.insertMany({ name, email, payment, phone });
    res.json({ Message: 'success', user });
    // let isExist = await userModel.findOne({email})
    // if (!isExist) {
    // }else{
    //     res.json({ Message: 'user is already exist' });
    // }
})


const createCheckOutSession = async (req, res, next) => {
    const { name, email, payment, phone } = req.body;
    let session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: 'egp',
                    unit_amount: payment * 100,
                    product_data: {
                        name: name
                    }
                },
                quantity:1

            }
        ],
        mode: 'payment',
        success_url: 'https://www.yourcompany.com/order/success',
        cancel_url: 'https://pngtree.com/so/cancel-icon',
        customer_email: email,
        client_reference_id: req.params.id,
        metadata: req.body
    })
    res.json({ message: "success", session })
}


const users = async (req, res) => {
    let users = await userModel.find()
    res.json({ message: 'success', users })
}


export {
    register,
    users,
    createCheckOutSession
}