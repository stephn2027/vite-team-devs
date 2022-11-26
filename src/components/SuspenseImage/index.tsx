interface SuspenseProps {
  src: string;
}

const imgCache = {
  cache: {},
  read(src) {
    if (!imgCache.cache[src]) {
      imgCache.cache[src] = new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          imgCache.cache[src] = true;
          resolve(imgCache.cache[src]);
        };
        img.src = src;
      }).then((img) => {
        imgCache.cache[src] = true;
      });
    }
    if (imgCache.cache[src] instanceof Promise) {
      throw imgCache.cache[src];
    }
    return imgCache.cache[src];
  },
};

export default function SuspenseImg({ src }: SuspenseProps) {
  imgCache.read(src);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <img alt="" src={src} />;
}
