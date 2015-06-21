class Rate < ActiveRecord::Base
  belongs_to :user
  belongs_to :slogan
  belongs_to :comment
  after_create :revise
  after_update :revise_update

  private

  def revise
    if slogan = Slogan.find_by(id: slogan_id)
      slogan.rating += likes - hates
      slogan.likes += likes
      slogan.hates += hates
      slogan.save
      parent_user = slogan.user
      parent_user.rating_slogan += likes - hates
      parent_user.likes_slogan += likes
      parent_user.hates_slogan += hates
    else
      comment = Comment.find(comment_id)
      comment.rating += likes - hates
      comment.likes += likes
      comment.hates += hates
      comment.save
      parent_user = comment.user
      parent_user.rating_comment += likes - hates
      parent_user.likes_comment += likes
      parent_user.hates_comment += hates
    end
    parent_user.rating += likes - hates
    parent_user.likes += likes
    parent_user.hates += hates
    parent_user.save
  end

  def revise_update
    if slogan = Slogan.find_by(id: slogan_id)
      if likes == 1
        slogan.rating += 2
        slogan.likes += 1
        slogan.hates -= 1
        slogan.save
        parent_user = slogan.user
        parent_user.likes += 1
        parent_user.hates -= 1
        parent_user.rating += 2
        parent_user.rating_slogan += 2
        parent_user.likes_slogan += 1
        parent_user.hates_slogan -= 1
      else
        slogan.rating -= 2
        slogan.likes -= 1
        slogan.hates += 1
        slogan.save
        parent_user = slogan.user
        parent_user.likes -= 1
        parent_user.hates += 1
        parent_user.rating -= 2
        parent_user.rating_slogan -= 2
        parent_user.likes_slogan -= 1
        parent_user.hates_slogan += 1
      end
    else
      comment = Comment.find(comment_id)
      if likes == 1
        comment.rating += 2
        comment.likes += 1
        comment.hates -= 1
        comment.save
        parent_user = comment.user
        parent_user.likes += 1
        parent_user.hates -= 1
        parent_user.rating += 2
        parent_user.rating_comment += 2
        parent_user.likes_comment += 1
        parent_user.hates_comment -= 1
      else
        comment.rating -= 2
        comment.likes -= 1
        comment.hates += 1
        comment.save
        parent_user = comment.user
        parent_user.likes -= 1
        parent_user.hates += 1
        parent_user.rating -= 2
        parent_user.rating_comment -= 2
        parent_user.likes_comment -= 1
        parent_user.hates_comment += 1
      end
    end
    parent_user.save
  end
end
