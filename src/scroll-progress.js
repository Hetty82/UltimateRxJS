import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

// helper
const calculateScrollPercent = (element) => {
  const { scrollTop, scrollHeight, clientHeight } = element;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// elements
const progressBarEl = document.querySelector(".progress-bar");

// scroll progress
const scroll$ = fromEvent(document, "scroll");
const progress$ = scroll$.pipe(
  map(({ target }) => calculateScrollPercent(target.scrollingElement))
);

// set width
progress$.subscribe((progress) => (progressBarEl.style.width = `${progress}%`));
