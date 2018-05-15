import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xD7C106C7179bB61BCd7a861E285F4bff3eA1C6e0'
);

export default instance;
