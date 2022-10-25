function recursive(max) {
  if (max >= 10000) return;
  max++;
  console.log(max);
  recursive(max);
}

recursive(-10);