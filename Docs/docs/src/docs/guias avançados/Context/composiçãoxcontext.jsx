function Page(props) {
    const user = props.user;
    const userLink = (
      <Link href={user.permalink}>
        <Avatar user={user} size={props.avatarSize} />
      </Link>
    );
    return <PageLayout userLink={userLink} />;
  }
  
  // Agora temos:
  <Page user={user} avatarSize={avatarSize} />
  // ... que renderiza ...
  <PageLayout userLink={...} />
  // ... que renderiza ...
  <NavigationBar userLink={...} />
  // ... que renderiza ...
  {props.userLink}

  function Page(props) {
    const user = props.user;
    const content = <Feed user={user} />;
    const topBar = (
      <NavigationBar>
        <Link href={user.permalink}>
          <Avatar user={user} size={props.avatarSize} />
        </Link>
      </NavigationBar>
    );
    return (
      <PageLayout
        topBar={topBar}
        content={content}
      />
    );
  }