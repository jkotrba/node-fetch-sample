import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.get('/', (req, res) => {
  const appKey = '360db06bf11224f84dfb32db0dec5284';
  const url = `http://api.openweathermap.org/data/2.5/weather?zip=85295,us&APPID=${appKey}`;

  const result = await fetch(url);
  const json = await result.json();
  res.json(json);

  // return fetch(url)
  //   .then(data => data.json())
  //   .then(json => res.json(json));
});

export default router;
