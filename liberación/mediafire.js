const axios = require('axios')
const cheerio = require('cheerio')

const Botfire = async (url) => {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const hasil = []
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
const seplit = link.split('/')
const nombre = seplit[5]
mime = nombre.split('.')
mime = mime[1]
hasil.push({ nombre, mime, size, link })
return hasil
}


module.exports = { Botfire }
