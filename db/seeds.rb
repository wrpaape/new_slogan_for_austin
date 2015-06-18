initial_userbase = 100
initial_slogan_count = 20
initial_comments_count = 200
possible_rates = [{likes: 1, hates: 0}] * 5 + [{likes: 0, hates: 1}]

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
initial_slogan_count.times do
  Slogan.create(body: Faker::Lorem.sentence,
              user_id: all_users.sample.id)
end

all_slogans = Slogan.all
initial_comments_count.times do
  Comment.create(body: Faker::Lorem.paragraph,
                 user_id: all_users.sample.id,
                 slogan_id: all_slogans.sample.id)
end

all_slogans.each do |slogan|
  rand(0..30).times do
    user = all_users.sample
    user_rate = possible_rates.sample
    if rate = Rate.find_by(user_id: user.id, slogan_id: slogan.id, likes: user_rate[:likes], hates: user_rate[:hates])
      user_rate = possible_rates.reject { |elem| elem == user_rate }.first
      rate.update(slogan_id: slogan.id,
                  user_id: user.id,
                  likes: user_rate[:likes],
                  hates: user_rate[:hates])
    else
      Rate.create(slogan_id: slogan.id,
                  user_id: user.id,
                  likes: user_rate[:likes],
                  hates: user_rate[:hates])
    end
    slogan.revise
    user.revise
  end
end

all_comments = Comment.all
all_comments.each do |comment|
  rand(0..10).times do
    user = all_users.sample
    user_rate = possible_rates.sample
    if rate = Rate.find_by(user_id: user.id, comment_id: comment.id, likes: user_rate[:likes], hates: user_rate[:hates])
      user_rate = possible_rates.reject { |elem| elem == user_rate }.first
      rate.update(comment_id: comment.id,
                  user_id: user.id,
                  likes: user_rate[:likes],
                  hates: user_rate[:hates])
    else
      Rate.create(comment_id: comment.id,
                  user_id: user.id,
                  likes: user_rate[:likes],
                  hates: user_rate[:hates])
    end
    comment.revise
    user.revise
  end
end
