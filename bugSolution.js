```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Effect runs only once after the initial render
    console.log('Effect ran'); //This will run only once
  }, []);

  return <div>Count: {count}</div>;
}
```