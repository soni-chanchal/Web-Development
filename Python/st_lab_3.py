import re

class Appuser:
  name:str
  dob: str
  username: str
  password: str
  is_active: bool

# list of users
appusers = []

u = Appuser()
u.name = 'Chanchal'
u.dob = '1999-02-22'
u.username = 'cheeku'
u.password = 'Chanchal@123'
u.is_active = True
appusers.append(u)

def validate_password(password: str) -> bool:
    pattern = "^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$"
    return re.findall(pattern, password)

def login(username:str, password:str):
  for user in appusers:
    if(user.username) == username and user.password == password:
      return True
    return False


def signup():
  user = Appuser()
  name = input('Enter your name: ')
  dob = input('Enter your date of birth in yyyy-mm-dd format: ')
  username = input('Enter your username: ')
  user.is_active = True

  while True:
    password = input('Enter your password: ')
    if(len(password) < 8):
        print('Password length must be more than or equal to 8 characters long.')
    if(not validate_password):
      print('Password must contain at least one capital one small, and more than or equal to 8 characters long.')
    else:
      user.password = password
      break
  appusers.append(user)
  print('Registered successfully!')


# app starts from here
while True:
  print('Welcome to DEI library!\nLogin or Create account to use library.\n1.Login\n2.Create an account.\n3.Exit\n')
  response = int(input('\nEnter your response: '))

  if(response == 1):
    username = input('\nEnter your username: ')
    password = input('\nEnter your password: ')
    if login(username=username, password=password):
      print('Logged in succesfully!')
      while True:
        # issue, return, search for book
        pass
    else:
        print('Invalid Creddentials!\n')

  elif(response == 2):
    signup()
    print()

  elif(response == 3):
    break

  else:
    print('\nEnter a valid response')
