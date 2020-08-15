/*
	A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

	He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

	His mother looks out of a window 1.5 meters from the ground.

	How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

	Three conditions must be met for a valid experiment:
	Float parameter "h" in meters must be greater than 0
	Float parameter "bounce" must be greater than 0 and less than 1
	Float parameter "window" must be less than h.
	If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

	Note:
	The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

	Test Cases:

	Test.assertEquals(bouncingBall(2.0, 0.5, 1) , 1);
      
	Test.assertEquals(bouncingBall(3.0, 0.66, 1.5) , 3);

	Test.assertEquals(bouncingBall(30.0, 0.66, 1.5), 15);

	Test.assertEquals(bouncingBall(30, 0.75, 1.5), 21);

	Test.assertEquals(bouncingBall(30, 0.4, 10), 3);

	Test.assertEquals(bouncingBall(40, 0.4, 10), 3);

	Test.assertEquals(bouncingBall(10, 0.6, 10), -1);

	Test.assertEquals(bouncingBall(40, 1, 10), -1);

	Test.assertEquals(bouncingBall(-5, 0.66, 1.5), -1);

	Test.assertEquals(bouncingBall(5, -1, 1.5), -1);

	Test.assertEquals(bouncingBall(4.0, 0.25, 1) , 1);
*/

// My solution using recursion (of course you can also solve it iteratively too)
function bouncingBall(h,  bounce,  window) {
  return (h > 0 && bounce > 0 && bounce < 1 && window < h) ? reduceHeight(h,bounce,window,0) : -1;
}

function reduceHeight(h,bounce,window, count){
  return h <= window ? count-=1 : reduceHeight(h*bounce,bounce,window,count+=2);
}

// Iterative solution using while loop by Balkoth, hazzy_b_, and others (codewars)
function bouncingBall(h,  bounce,  window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
  return rebounds;
}

// Two nicer solutions using math! (dondanieliyo and gkucmierz)
function bouncingBall(h,  bounce,  window) {
  if(h <= 0 || bounce <= 0 || bounce >= 1 || window >= h){
      return -1
  }else{
    return h * bounce <= window ? 1 : parseInt(Math.log(window/h) / Math.log(bounce) +1) * 2 - 1;
  }
}

// Personally I think this one is easier to understand especially since someone else explained it in a concise manner (trappingArt)
/*
	initial: h;

	after 1st iteration: h1 = h x b

	after 2nd iteration: h2 = h1 x b = h x b x b = h x b^2

	after 3rd iteration: 
	h3 = h2 x b = h1 x b x b = h x b x b x b = h x b^3

	and so on...
	so we have this relationship:

	new height = h x b^n, where n is no. of iteration

	if we need to see from the window then

	h x b^n > w

	take log() in both side, we have:

	n > Math.log(w/h) / Math.log(b)

	we know that n must be an integer

	n = Math.floor(Math.log(w/h) / Math.log(b))

	going down and up is paired up and add 1 for initial, so we have:

	result = n * 2 + 1

	Hence,

	result = Math.floor(Math.log(w/h) / Math.log(b)) * 2 + 1
*/
function bouncingBall(h, b, w) {
  if (h <= w || b >= 1) return -1;
  let r = Math.floor(Math.log(w/h)/Math.log(b)) * 2 + 1;
  if (Number.isNaN(r)) return -1;
  return r;
}