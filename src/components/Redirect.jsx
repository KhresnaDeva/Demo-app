import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Lakukan redirect ke URL tujuan
    router.push('https://api-oss.domain-dev.site/authorize?client_id=64cca6634bb48b608d3bdf31&redirect_uri=http%3A%2F%2Flocalhost%3A8081%2Fnotes&audience=http%');
  }, []);

  return null;
};

export default RedirectPage;