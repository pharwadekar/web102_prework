# WEB102 Prework - *Game Funding*

Submitted by: **Pranav Harwadekar**

**Game Funding** is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: **2** hours spent in total

## Required Features

The following **required** functionality is completed:

* [ ] The introduction section explains the background of the company and how many games remain unfunded.
* [ ] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [ ] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [ ] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

* [ ] Scrapped more than 50 extra games from kickstarter and added their product details and images to the website.
* [ ] Used Apify for scrapping and parsed the JSON with JavaScript.

## Video Walkthrough

Here's a walkthrough of implemented features:

![recordedGIF](https://github.com/user-attachments/assets/adda2397-db8b-486a-bcfb-9e846157c2d3)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Ezgif  
Used Screen Record Feature with SnippingTool for Windows
Converted the recorded mp4 file to GIF using https://ezgif.com/

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

The website provided a good refresher on some of the basics of HTML/CSS/JavaScript and helped me learn how to work with reduce and filter functions in depth. Reduce functions simplify a for loop while using an accumulation method and save the result to a variable. Likewise, filter was used on some JSON data to only show games if a condition was met. 

For the optional part I tried implementing manual scraping with Beautiful Soup, Request Library, and Selenium in Python but due to preventative measures against web scrapping from kickstarter.com, I ended up using a scraper API to get the JSON output. This allowed me to get around 55 extra games which I was able to add to the website.

## License

    Copyright 2024 Pranav Harwadekar

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
