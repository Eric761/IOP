# <h1 align="center"> <b>GUI based tool for evaluating Reliability of Distribution System</b></h1>

## **Abstract**

<h4 align="justify">Over the past few decades distribution systems have received considerably less of the attention since it is relatively cheap and outages have a very localized effect. On the other hand, analysis of the customer failure statistics of most utilities shows that the distribution system makes the greatest individual contribution to the unavailability of supply to a customer. These Statistics reinforce the need to be concerned with the reliability evaluation of distribution systems.</h4>
<br/>

## **Description**

<h4 align="justify">To measure system performance, the electric utility industry has developed several measures of reliability. The aim of the project is to facilitate the quantitative analysis of the reliability of large distribution systems by calculating the various indices of reliability. The implementation is to be done using a <b>GUI tool which enables us to calculate the different indices for a sufficiently large amount of data.</b></h4>
<br/>

## **About the Project**

<h3><i>Calculation of Reliability Indices:</i></h3>

<h4 align="justify">Based on the study done regarding the different reliability indices, the following formulae are used for the measurement of indices.</h4>

<h4 align="justify"><b>λi</b>=frequency of faults, <b>Ui</b>=average annual outage time, <b>Ni</b>=No. of customers of load point i</h4>

<h4><b><i>SAIFI</b> = (Total no.of customer Interruption)/(Total no.of customer served)
</i> = ((∑(<b>λiNi</b>))) / <b><i>INi</i></b></h4>

<h4><b><i>CAIFI</b> = (Total no.of customer Interruption)/(Total no.of customer affected)
</i>= ((∑(<b>λiNi</b>))) / <b><i>INi</i></b></h4>

<h4><b><i>SAIDI</b> = (Sum of customer interruption durations)/(Total no.of customer)</i> = ((∑(<b>UiNi</b>))) / £<b><i>Ni</i></b></h4>
<br/>

## **Project Setup:**

Clone the repository -

```shell
git clone https://github.com/Eric761/IOP.git
```

1: Checkout to master branch

```shell
cd IOP-GUI-Tool
```

2: Install the dependencies by running

```shell
npm install
```

3: Run the server

```shell
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser !!
