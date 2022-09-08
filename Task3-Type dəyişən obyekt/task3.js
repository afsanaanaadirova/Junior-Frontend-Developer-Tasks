const obj = [
  { type: "A", value: ["Tesla"] },
  { type: "A", value: ["GMC"] },
  { type: "B", value: ["KIA"] },
  { type: "C", value: ["Dodge"] },
  { type: "C", value: ["Ford"] },
];

const output = Object.values(
  obj.reduce((aggObj, item) => {
    if (aggObj[item.type]) {
      const newArr = [...new Set([...aggObj[item.type].value, ...item.value])];
      aggObj[item.type].value = newArr;
    } else {
      aggObj[item.type] = item;
    }
    return aggObj;
  }, {})
);

console.log(output);
