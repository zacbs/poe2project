# Pre-amble

Hi

I am really enjoying poe2 and after 150 hours I wanted to take a break but can't stop thinking about the game.

I also really need to brush up on my programming skills after not touching anything for nearly a year after my bootcamp (Barring what I've done for uni & working).

I've been focusing really hard on trying to do well in my new position I accepted right after the bootcamp, but now it's time to be ready to transisition into a new role. (Hopefully in the CS space)

Anyways onto the project.

# Problem Statement

While I was enjoying the game, there is something that I feel is missing, a lot of people in my sphere were actively checking in on the currency exchange in game, because they wanted to see where to invest early to make some big money (In-game). But there is a problem! It is currently not possible to check on the currency exchange except for ingame or via the poe trade website (which currently is not good for data viewing and has no price history).

Now I want to create a simple site that has all the conversion ratios easy to acess on a simple site, not overly complex to get started with.

Maybe add a discord bot integration?? Could be fun

## Issue with site

GGG has not provided an open API as of yet for poe2 however nothing says I can't be ready for when this is made available!

### Stack

MERN for the site, since that is all I have learned except flask so far! I should do this in TS but this is just a refresher so should be good.

## Backend design

Fleshing out what I will need to store in the database,

Inital thoughts: Need to flesh this out, my first thought is to pull all the data from poe2 trade and then store this in the trades table. I will then run some statistical analysis on them to create the data for the prices table.

Currently I have the prices of the currencies in the prices table stored as integers but now that I'm thinking more about it, possibly I should store them as dicts instead (BSON object?)

Also I have written integer a few times here however this is incorrect as it should be a float / decimal, I will need to go back and update.

**prices**

<!-- Might need to change these to objects for the price values -->

id, currency_id, x_price, d_price, m_price, polled_time

id = Primary Key

currency_id = foreign key

x_price = Price of the Currency Item in Exalted Orbs (integer)

d_price = Price of the Currency Item in Divine Orbs (integer)

m_price = Price of the Currency Item in Mirror of Kalandras (integer)

polled_time = When these prices were calculated (date)

**currencys**

id, currency

id = Primary Key

currency = Currency item (string)

**x_trades**

id, currency_id, x_value

id = Primary Key

currency_id = foreign key

x_value = value of the currency for this transaction (integer)

**d_trades**

id, currency_id, d_value

id = Primary Key

currency_id = foreign key

d_value = value of the currency for this transaction (integer)

**m_trades**

id, currency_id, m_value

id = Primary Key

currency_id = foreign key

m_value = value of the currency for this transaction (integer)

## For later

*_price object

q1, q2, q3, q4, avg, min, max, distribution, volume

