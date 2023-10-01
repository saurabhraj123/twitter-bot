// content-script.js

const TWITTER_URL = "https://twitter.com/";
const COMMENTS_LIMIT = 30;

async function main() {
  // Get the current tweet.
  const tweet = document.querySelector('[data-testid="tweetText"]');
  console.log("tweet is", tweet);

  // Extract the text of the tweet.
  //   const tweetText = tweet.querySelector(".tweet-text").textContent;

  // Generate a comment for the tweet.
  //   const comment = await generateComment(tweetText);

  // Click on the comment icon of the tweet.
  //   const commentButton = tweet.querySelector(".tweet-btn.comment");
  //   commentButton.click();

  // Paste the generated comment into the comment box.
  //   const commentBox = document.querySelector(".tweet-compose-text");
  //   commentBox.value = comment;

  // Click the post comment button.
  //   const postCommentButton = document.querySelector(".tweet-compose-btn");
  //   postCommentButton.click();
}

async function generateComment(tweetText) {
  // Make an API call to OpenAI to generate a comment.
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      Authorization: "Bearer YOUR_OPENAI_API_KEY",
    },
    body: JSON.stringify({
      prompt: `Generate a comment for the following tweet: ${tweetText}`,
      model: "text-davinci-003",
      max_tokens: 256,
      temperature: 0.7,
    }),
  });

  // Parse the JSON response.
  const jsonResponse = await response.json();

  // Return the generated comment.
  return jsonResponse.choices[0].text;
}

main();
