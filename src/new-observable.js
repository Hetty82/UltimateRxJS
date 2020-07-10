import { Observable } from "rxjs";
import { observer } from "./helpers";

const observable = new Observable((subscriber) => {
  subscriber.next("Hello from new observable");
  subscriber.next("Hello again");
  // subscriber.error("Whaaa");
  subscriber.complete();
});

console.log("before");
observable.subscribe(observer(1));
console.log("after");

const interval = new Observable((subscriber) => {
  let count = 0;

  const intervalId = setInterval(() => {
    subscriber.next(count++);
    // subscriber.complete();
  }, 1000);

  return () => {
    console.log("🧹 cleaning up");
    clearInterval(intervalId);
  };
});

const sub1 = interval.subscribe(observer(2));
const sub2 = interval.subscribe(observer(3));
// setTimeout(() => interval.subscribe(observer(3)), 3000);
setTimeout(() => {
  sub1.unsubscribe();
  sub2.unsubscribe();
}, 3500);
