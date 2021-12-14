# Arctos Scouting Site

This site use nextjs and tailwindcss for the frontend and stores all the data in google sheets

## Setting Up

First clone the repository with:

```shell
$ git clone https://github.com/Arctos6135/scouting-site.git
```

Next you need to set up a service account on google cloud console

1. Go to [google console](https://console.cloud.google.com/) and create a new project with a name like "scouting site"
2. in the search bar look up "service accounts" and press on "Service Accounts" then "create service account"
3. give your service account a name like "sheeter" and then press "create and continue"
4. select the basic owner access grant, press continue then done
5. press on your newly created service account then press on the keys tab and "add key" and press create, this will download the key to your computer
6. move the downloaded file to where you cloned the repository and change the name to "key.json"
7. back in google cloud console in the search bar look up "sheets" and press on "Google Sheets API" and press enable

Now you need to set up the sheet

1. first make a copy of [the 2020 sheet](https://docs.google.com/spreadsheets/d/1a5D56SjuTPhKqZtRwRcIYFt-xY6JXBUuCWTDHxaoYuk/edit)
2. then add the email of the service account (you can find this by going back to the service accounts area) as an editor to the sheet

# That is currently it for right now
