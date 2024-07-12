## ID_STUDENT: 11222970

  ## Design Choices and  Screenshots of the app
  
  # 1. Drawer Menu Implementation
             Package Choice: The react-native-drawer-layout package is chosen for its simplicity and effectiveness in creating a drawer layout.
                              It provides a flexible and easy-to-use API for integrating a side menu.
             Drawer Structure: The drawer content is designed to match the structure shown in your provided image.
                                 It includes sections for Store, Locations, Blog, Jewellery, Electronic, and Clothing, each represented by a TouchableOpacity component for interaction.
             Header Layout: The header contains a menu button to open the drawer, a logo, and additional icons for search and cart navigation. 
                                   This mirrors a common design pattern for mobile applications, providing easy access to the main navigation features.
  # 2. Product Listing and Navigation
                  FlatList for Products: The FlatList component is used to display the list of products in a two-column grid.
                                           This ensures a clean and organized layout for the product images and details.
                  Product Details Navigation: Each product in the list is wrapped in a TouchableOpacity component.
                                      When a product is tapped, it navigates to the ProductDetailScreen,
                                               passing the product details and the addToCart function as parameters.
  # 3. Data Storage
          AsyncStorage for Persistence: AsyncStorage is used to persist the cart data.
                                       This allows the cart items to be saved across app sessions,
                                          providing a better user experience as the cart contents are not lost when the app is closed and reopened.
          Loading Cart Data: On component mount, the cart data is loaded from AsyncStorage using the useEffect hook.
                              This ensures the cart state is initialized with any previously saved items.
          Updating Cart Data: When a product is added to the cart,
                              the addToCart function updates the local state and saves the new cart data to AsyncStorage.
                                 This ensures the cart is always up-to-date and the changes persist.
   ## Screenshots of the app
   ![WhatsApp Image 2024-07-12 at 8 25 10 PM](https://github.com/user-attachments/assets/6380e44a-cb34-4dc5-ac20-c61d7cc79e99)       ![WhatsApp Image 2024-07-12 at 8 25 12 PM](https://github.com/user-attachments/assets/06c4bbce-d364-4c64-b747-8427a269938e)
   
   ![WhatsApp Image 2024-07-12 at 8 25 13 PM](https://github.com/user-attachments/assets/55c104ba-b0b8-49f3-b977-fe96fb577058)       ![WhatsApp Image 2024-07-12 at 8 25 14 PM](https://github.com/user-attachments/assets/6b3c41cb-bb68-45d6-839a-e2b4c33c7893)

 

   ![WhatsApp Image 2024-07-12 at 8 25 16 PM](https://github.com/user-attachments/assets/5256205f-b6ed-4747-83d6-3179b4639411)       ![WhatsApp Image 2024-07-12 at 8 25 16 PM (1)](https://github.com/user-attachments/assets/17cadaa4-3b00-4465-a834-e061dd8c6b20)




   Navigation Screen
   ![WhatsApp Image 2024-07-12 at 11 35 11 PM](https://github.com/user-attachments/assets/d8d78ad7-1c65-434a-81f7-ce19ef0d0031)
   
   Carts screen
   ![WhatsApp Image 2024-07-12 at 11 33 42 PM](https://github.com/user-attachments/assets/c50645cb-f8ff-4cce-8265-d7eac9b555d6)



Product detail screen
   ![WhatsApp Image 2024-07-12 at 11 33 42 PM (1)](https://github.com/user-attachments/assets/ff6da3dc-6801-487c-808e-7ab5f4d6221f)




