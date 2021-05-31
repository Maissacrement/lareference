const stripe = require('stripe')('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');
const YOUR_DOMAINS = ['localhost:8080'];
const hello = (req,res) => res.send('hello')

const errorHandle = (message) => {
  throw new Error(message)
}

const create_session = async (req, res) => {
    try {
      const buf = Buffer.from(req.query.mount, 'base64');
      const amount = parseInt(buf.toString('ascii').split('=')[1])
      const refer = req.headers.referer
      const domain = YOUR_DOMAINS.map(x => x.endsWith(refer)).length > 0 ? refer: errorHandle('Domain not found');
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: 'Stubborn Attachments',
                images: ['https://i.imgur.com/EHyR2nP.png'],
              },
              unit_amount: amount * 100,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${domain}#/`,
        cancel_url: `${domain}#/error?msg=fail`,
      });
      res.json({ id: session.id });
    } catch (e) {
      console.error(e.message)
      res.json({ id: null });
    }
}

module.exports = { create_session }