initial_userbase = 100
initial_userbase.times do
  User.create(name: Faker::Name.name,
              email: Faker::Internet.email,
              password_digest: BCrypt::Password.create(Faker::Internet.password))
end

User.create(name: "admin",
            email: "admin@admin.com",
            password_digest: BCrypt::Password.create("admin"))
initial_userbase += 1

all_users = User.all
all_subrebbits = Subrebbit.all
initial_slogan_count = 20
initial_post_count.times do
  Post.create(body: Faker::Lorem.sentence,
              user_id: all_users.sample.id,
              subrebbit_id: all_subrebbits.sample.id)
end

all_posts = Post.all
initial_comments_count = 200
initial_comments_count.times do
  Comment.create(body: Faker::Lorem.paragraph,
                 user_id: all_users[rand(0...initial_userbase)].id,
                 post_id: all_posts[rand(0...all_posts.count)].id)
end


all_posts.each do |post|
  vote = Vote.create(post_id: post.id,
              user_id: post.user_id,
              upvotes: rand(0..1000),
              downvotes: rand(0..250))
  post.user.carma += vote.upvotes - vote.downvotes
  post.user.save
end

Comment.all.each do |comment|
  vote = Vote.create(comment_id: comment.id,
              user_id: comment.user_id,
              upvotes: rand(0..100),
              downvotes: rand(0..25))
  comment.user.carma += vote.upvotes - vote.downvotes
  comment.user.save
end
