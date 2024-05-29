export const authConfig = {
    providers:[],
    pages: {
      signIn: '/Login',
    },
    callbacks: {
      authorized({ auth, request }) {
        const isLoggedIn = auth?.user;
        const isOnDashboard = request.nextUrl.pathname.startsWith("/Dashboard");
        if (isOnDashboard) {
          if (isLoggedIn) return true;
          return false;
        } else if (isLoggedIn) {
          return Response.redirect(new URL("/Dashboard", request.nextUrl));
        }
        return true;
      },
    },
  };