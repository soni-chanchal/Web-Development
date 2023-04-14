def login(username:str, password:str):
    if username =='cheeku' and password=='12345':
        print('Login succefully!')
    elif username =='cheeku'and password!='12345':
        print('Invalid password!')
    elif username !='cheeku'and password=='12345':
        print('Invalid user!')
    else:
        print('Invalid Credentials!')

username = input('Enter your username: ')
password = input('Enter your password: ')
login(username=username, password=password)
