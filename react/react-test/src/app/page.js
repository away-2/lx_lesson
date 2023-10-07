function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://img1.baidu.com/it/u=1546227440,2897989905&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
const listItems = products.map(product =>
  <li key={product.id}
  style={{
    color: product.isFruit ? 'magenta' : 'darkgreen'
  }}
  >
    {product.title}
  </li>
);
export default function Home() {
    return (
      <div>
        {/* <h1>Welcome to my app</h1> */}
        {/* <MyButton /> */}
        {/* <AboutPage /> */}
        {/* <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      /> */}
       {/* <ul>{listItems}</ul> */}
      </div>
    );
}
