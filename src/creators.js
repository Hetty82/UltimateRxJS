import { fromEvent, of, Subscription, range, from, timer } from "rxjs";
import { observer } from "./helpers";

const subscriptions = new Subscription();
const eventObs = observer("event");

const event$ = fromEvent(document, "click");
// const source$ = fromEvent(documenst, "keyup");
// const source$ = fromEvent(document, "mousemove");
// const source$ = fromEvent(window, "resize");

subscriptions.add(event$.subscribe(eventObs));
subscriptions.add(event$.subscribe(eventObs));

const ofObs = observer("of");
const of$ = of(1, 2, 3);
subscriptions.add(of$.subscribe(ofObs));

const rangeObs = observer("range");
const range$ = range(6, 3);
subscriptions.add(range$.subscribe(rangeObs));

const fromArrayObs = observer("fromArray");
const fromArray$ = from([6, "a", 12]);
subscriptions.add(fromArray$.subscribe(fromArrayObs));

const fromStringObs = observer("fromString");
const fromString$ = from("Yo!");
subscriptions.add(fromString$.subscribe(fromStringObs));

const fromFetchObs = observer("fromFetch");
const fromFetch$ = from(fetch("https://api.github.com/users/octocat"));
// const fromFetch$ = from(fetch("https://khjgapi.github.com/users/octocat"));
subscriptions.add(fromFetch$.subscribe(fromFetchObs));

function* hello() {
  yield "Hello";
  yield "World";
}
const iterator = hello();

const fromGeneratorObs = observer("fromGenerator");
const fromGenerator$ = from(iterator);
subscriptions.add(fromGenerator$.subscribe(fromGeneratorObs));

const map = new Map();
map.set("a", "yes");
map.set("b", "noos");

const fromMapObs = observer("fromMap");
const fromMap$ = from(map);
subscriptions.add(fromMap$.subscribe(fromMapObs));

const timerObs = observer("timer");
const timer$ = timer(0, 1000);
subscriptions.add(timer$.subscribe(timerObs));

setTimeout(() => {
  console.log("unsubscribing");
  subscriptions.unsubscribe();
}, 5000);
