/** @format */

// Problem 5: Convert your gems into diamond
// তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে।
// ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
// ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
// ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
// [ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
// এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
// Sample Input & Output:-

// Input: 1, 1, 1
// Output: 96

// Input: 20, 200, 50
// Output: 6970

// Input: 100, 5, 1
// Output: 303

var gem1 = prompt("Enter 1st number");
var gem2 = prompt("Enter 2nd number");
var gem3 = prompt("Enter 3rd number");

function gemsToDiamond() {
  if (!isNaN(gem1 || gem2 || gem3)) {
    var diamond1 = gem1 * 21;
    var diamond2 = gem2 * 32;
    var diamond3 = gem3 * 43;
    var sumOfD = diamond1 + diamond2 + diamond3;
    if (sumOfD > 2000) {
      document.write(sumOfD - 2000);
    } else {
      document.write("Total diamonds " + sumOfD);
    }
  } else {
    document.write("Enter a number ");
  }
}
gemsToDiamond();
