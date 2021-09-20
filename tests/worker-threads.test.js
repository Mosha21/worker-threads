const request = require('supertest')
const app = require('../src/app')

// test('Should create a new title', async () => {
//     await request(app).post('/titles').send({
//         title: "Title # 7",
//         date_created: "2005-05-23 05:30:33",
//         relevance: 45,
//         description_id: 1
//     }).expect(201)
// })

test('Should get all queries requested in interview in parallel', async () => {
    await request(app).get('/all?actions=[1,2]').send().expect(200)
})