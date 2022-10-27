import { Head } from "$fresh/runtime.ts";  <>
      <Head>
        <title>bunspresso<e>
        <link
          rel="stylesheet"
          href="/lux.bootstrap.min.css"
        />
      </Head>
      <div>
        {children}
      </div>
    </>
  );
};

export default Layout;
