import User from '../models/User';
import UserLoadWallet from '../models/UserLoadWallet';
import UserLoadDetail from '../models/UserLoadDetail';

import validateInput from '../shared/validations/common';


export default {

  scanload: (req, res) => {
    const { phone, amount, type, source } = req.body;
    const loadInfo = { phone, amount, type, source };
    const { errors, isValid } = validateInput(loadInfo, ['phone', 'amount', 'type', 'source']);

    const topLoad = (loadInfo) => {
      User.where({ phone: phone }).fetch().then(() => {
        UserLoadDetail.forge(loadInfo).save().then(
          () => res.json({ result: 1, description: `P${amount}, ${type} from ${source} load successfully` });
        );
      }).catch(
        err => response.status(500).json({ error: 'Accout not found' })
      );
    }

    isValid ? topLoad(phone, amount, type, source) : res.state(400).json(errors);
  },

  scanPay: (req, res) => {
    const { phone, amount, type } = req.body;
    const payInfo = { phone, amount, type };
    const { errors, isValid } = validateInput(payInfo, ['phone', 'amount', 'type']);

    const pay = (payInfo) => {
      User.where({ phone: phone }).fetch().then(() => {
        UserPayDetail.forge(payInfo).save().then(
          () => res.json({ result: 1, description: `P${amount}, ${type} pay successfully` });
        );
      }).catch(
        err => response.status(500).json({ error: 'Accout not found' })
      );
    }

    isValid ? pay(phone, amount, type) : res.state(400).json(errors);
  },

  loadTransfer: (req, res) => {
    const { phone, amount, transfer_to } = req.body;
    const transferInfo = { phone, amount, transfer_to };
    const { errors, isValid } = validateInput(transferInfo, ['phone', 'amount', 'transfer_to']);

    const transfer = (transferInfo) => {
      User.where({ phone: phone }).fetch().then(() => {
        UserLoadTransferDetail.forge(transferInfo).save().then(
          () => res.json({ result: 1, description: `P${amount} transfer to ${transfer_to} successfully` });
        );
      }).catch(
        err => response.status(500).json({ error: 'Accout not found' })
      );
    }

    isValid ? transfer(phone, amount, transfer_to) : res.state(400).json(errors);
  },

}
