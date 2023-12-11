import axios from 'axios';
import * as cheerio from 'cheerio';

export default async function loadIntoCheerio(url) {
    const response = await axios({
        method: 'get',
        url: url,
        responseType: 'stream'
    });

    let html = '';

    response.data.on('data', (chunk) => {
        html += chunk;
    });

    return new Promise((resolve, reject) => {
        response.data.on('end', () => {
            const $ = cheerio.load(html);
            resolve($);
        });

        response.data.on('error', reject);
    });
}