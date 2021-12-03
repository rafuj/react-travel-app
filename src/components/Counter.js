import React from "react";
import useCounter from "../hooks/useCounter";
import classes from "../styles/Counter.module.css";
import CounterItems from "./CounterItems";
import Section from "./Section";
export default function Counter() {
  const { loading, error, counter } = useCounter();
  return (
    <Section className="pt-120 pb-120">
      <div className={classes.counter__wrapper}>
        {loading && <div>Loading...</div>}
        {!loading && counter.length === 0 && <div>No Data Found...</div>}
        {error && <div>Something Went Wrong..</div>}
        {!loading &&
          counter.length > 0 &&
          counter.map((item) => (
            <CounterItems
              title={item.title}
              image={item.image}
              count={item.count}
              key={item.id}
            />
          ))}
      </div>
    </Section>
  );
}
