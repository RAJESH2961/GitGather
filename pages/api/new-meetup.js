//  /api/mew-meetup

function handler(req, res) {
    if(req.method === 'POST') {
        const data = req.body;
        const { title, image, address, description } = data;

        // storing data in database
    }
}

export default handler;