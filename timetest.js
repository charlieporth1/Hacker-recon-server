let moment = require('moment');
let now = new Date();
let date = moment(now).unix();
let date30 = moment(now).add(1, 'M').unix();
console.log("now", now);
console.log("date", date);
console.log("date30", date30);

let map = {
    metadata: [{id: 16307, key: '_stripe_customer_id', value: 'cus_DjpfbIwFJ6ZHeG'},
        {id: 16308, key: '_stripe_source_id', value: 'src_1DLsbQInCzLNBVmGi7NJusW3'},
        {id: 16309, key: '_stripe_charge_captured', value: 'yes'},
        {id: 16310, key: '_stripe_fee', value: '0.36'},
        {id: 16311, key: '_stripe_net', value: '1.64'},
        {id: 16312, key: '_stripe_currency', value: 'USD'}]
};

const meta_data = {d: map};
const mp = new Map;
const xah_obj_to_map = (obj => {
    Object.keys(obj).forEach(k => {
        mp.set(k, obj[k])
    });
    return mp;
});
// var key = [];
// var value = [];
const meta_dataMap = new Map();

for (let i in meta_data.d.metadata) {
    meta_dataMap.set(meta_data.d.metadata[i].key, meta_data.d.metadata[i].value);
}

console.log("meta_dataMap", meta_dataMap);
// meta_dataMap.set('_stripe_source_id', date);
// meta_dataMap.set('_stripe_customer_id', date30);
const source = meta_dataMap.get("_stripe_source_id");
const customer = meta_dataMap.get("_stripe_customer_id");
console.log("meta_dataMap.get('_stripe_source_id') ", meta_dataMap.get("_stripe_source_id"));
console.log("meta_dataMap.get('_stripe_customer_id') ", meta_dataMap.get("_stripe_customer_id"));
console.log("source ", source);
console.log("customer ", customer);
let num; //= 2922.9
const fee = 0;
const amount = '2.00';
// num *= 100
// noinspection JSAnnotat
// num *= 100;
// noinspection JSAnnotator
// parseInt(num) *= 100;
// noinspection JSAnnotator
let line_items = {
    line_items:
        [{
            id: 194,
            name: 'Studioso Institutional Monthly Subscription',
            product_id: 1085,
            variation_id: 0,
            quantity: 1,
            tax_class: '',
            subtotal: '2.00',
            subtotal_tax: '0.00',
            total: '2.00',
            total_tax: '0.00',
            taxes: [],
            meta_data: [],
            sku: '',
            price: 2
        }],
};
num = Number(amount);

num *= 100;

num += fee + (fee * 0.06 + 33);
console.log("fee *0.06+33", fee + (fee * 0.06 + 33));
console.log("fee", fee);
console.log("num", num);
objToStrMap(line_items);

function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}

let line_itemsMap = new Map();

let values = [line_items.line_items.quantity];
let keys = new Array(line_items.line_items.keys());
for (let i in keys) {
    line_itemsMap.set(keys[i], values[i])
}

// Object.keys(line_items.line_items).forEach (k => { mp.set(k, obj[k]) });
// for (i in line_items.line_items) {
//     line_itemsMap.set(line_items.line_items.forEach(), line_items.line_items.i);
//     console.log("line_items.line_items[i] ", line_items.line_items.i);
// }

function generateUUID() { // Public Domain/MIT
    let limit = 10;
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16).substr(0, limit); //.substring(0, limit).slice(0, limit).substr(0, limit); //substr() is also good
    });
}
const quantity = line_itemsMap.get('quantity');
let coupon = generateUUID().substr(0, 10);
console.log("coupon ", coupon);
console.log("line_itemsMap ", line_itemsMap);
console.log("quantity ", quantity);
// console.log("objToStrMap(line_items); ", objToStrMap(line_items.line_items));
console.log("objToStrMap(line_items).get('quantity') ", objToStrMap(line_items.line_items).get("quantity"));
console.log("line_items.line_items.quantity ", line_items.line_items[0].quantity);

const status = "hick"
const customerId = null

const subscriptionStartDate = date;
const subscriptionEndDate = date30;
// const subscriptionStartDate = req.body.data.object.current_period_start;
// const subscriptionEndDate = req.body.data.object.current_period_end;
const subscriptionId = null
const uid = "nkGYkYsShlhQxwoMhCfx6L4JALL2";
const documentRef = userDataRef.child(uid)
documentRef.on("value",function (snapshot) {
    const firebaseUserId = Object.keys(snapshot.val())[0];

    if (firebaseUserId) {
        let subscription = {};
        subscription['subscriptionId'] = subscriptionId;
        subscription['subscriptionStatus'] = status;
        subscription['subscriptionStartDate'] = subscriptionStartDate;
        subscription['subscriptionEndDate'] = subscriptionEndDate;

        userDataRef.child(firebaseUserId).child('subscription').update(subscription);
        res.status(200).send(status);
    } else {
        res.status(500).end();
    }
}).catch((error) => {
    res.status(500).send(error);
});
