function solution(price) {
  if (price < 100000) return price;
  if (price >= 100000 && price < 300000)
    return Math.trunc(price - price * 0.05);
  if (price >= 300000 && price < 500000) return Math.trunc(price - price * 0.1);
  if (price >= 500000) return Math.trunc(price - price * 0.2);
}
