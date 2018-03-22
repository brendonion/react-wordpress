### Project:
This project demonstrates the use of wordpress api v2 within a react app. This means that there is no use for wordpress templates. All the api calls, functionality, and styling can be done using a react front end.

Created by Brendan Walker

### To Run:

`npm install`

`npm run dev`


### Wordpress React tutorial
1. Create a wordpress account
2. Download MAMP: [MAMP & MAMP PRO - Downloads](https://www.mamp.info/en/downloads/) (for development purposes)
3. Follow these MAMP directions: [Installing WordPress Locally on Your Mac With MAMP « WordPress Codex](https://codex.wordpress.org/Installing_WordPress_Locally_on_Your_Mac_With_MAMP)
4. Follow this tutorial [Headless WordPress with React - Complete Tutorial by J.C. Haiti on CodePen](https://codepen.io/jchiatt/post/headless-wordpress-with-react-complete-tutorial)
5. Set up authentication: [JWT Authentication for WP REST API — WordPress Plugins](https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)

* Open MAMP to start up the local wordpress server
* Go to http://localhost:8888/[db-name]/wp-admin/index.php
* Endpoints: http://localhost:8888/wordpresstest/wp-json/…


#### Needed plugins for Wordpress (using v4.9.4):
* ACF to REST API
* Advanced Custom Fields
* Custom Post Type UI
* JWT Authentication for WP REST API

#### Source Code Edits:
>insert into `[project-root]/wp-includes/rest-api/endpoints/class-wp-rest-users-controller.php` (around line 48) to allow any user to create a subscriber account

```
register_rest_route( 'wp/v2', '/users', array(
			array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array($this, 'create_item'),
					'permission_callback' => function( $request ) {

							// METHOD 1: Silently force the role to be a subscriber
							// $request->set_param('roles', array('subscriber'));

							// METHOD 2: Be nice and provide an error message
							if ( ! current_user_can( 'create_users' ) && $request['roles'] !== array('subscriber')) {

									return new WP_Error(
											'rest_cannot_create_user',
											__( 'Sorry, you are only allowed to create new users with the subscriber role.' ),
											array( 'status' => rest_authorization_required_code() )
									);

							}

							return true;
					},
					'args'                => $this->get_endpoint_args_for_item_schema( WP_REST_Server::CREATABLE ),
			),
		) );
```

>Insert into `[project-root]/functions.php` at the top (around line 10):

```
add_filter( 'acf/rest_api/key', function( $key, $request, $type ) {
	return 'acf_fields';
}, 10, 3 );

```

Look through source code to see how everything comes together.
