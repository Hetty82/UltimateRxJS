import { of, Observable } from "rxjs";

/*
 * Any code samples you want to play with can go in this file.
 * Updates will trigger a live reload on http://localhost:1234/
 * after running npm start.
 */
of("Hello", "RxJS").subscribe(console.log);

const observer = (count) => ({
  next: (value) => console.log(`🤓 ${count} | next:`, value),
  error: (error) => console.log(`🤓 ${count} | error:`, error),
  complete: () => console.log(`🤓 ${count} | complete!`),
});

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

const subscription = interval.subscribe(observer(2));
const subscription = interval.subscribe(observer(2));
// setTimeout(() => interval.subscribe(observer(3)), 3000);
setTimeout(() => subscription.unsubscribe(), 3500);
