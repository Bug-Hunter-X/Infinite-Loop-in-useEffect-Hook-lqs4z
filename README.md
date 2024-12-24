# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by incorrect usage of the `useEffect` hook.

## Bug Description
The `useEffect` hook in the `MyComponent` component is designed to update the `count` state variable.  However, it lacks a dependency array, causing it to re-run on every render, leading to an infinite loop and application crash.

## Solution
The solution involves correctly specifying the dependency array in the `useEffect` hook.  An empty array `[]` indicates that the effect should only run once after the initial render.  If the effect needs to run based on changes to specific state variables or props, those values should be listed in the dependency array.