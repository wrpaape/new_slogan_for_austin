class Rate < ActiveRecord::Base
  belongs_to :user
  belongs_to :slogan
  belongs_to :comment
  after_create :revise
  after_update :revisex2

  private

  def revise
    if slogan = Slogan.find_by(id: slogan_id)
      slogan.rating += likes - hates
      slogan.save
      parent_user = slogan.user
      parent_user.rating_slogan += likes - hates
    else
      comment = Comment.find(comment_id)
      comment.rating += likes - hates
      comment.save
      parent_user = comment.user
      parent_user.rating_comment += likes - hates
    end
    parent_user.rating += likes - hates
    parent_user.save
  end

  def revisex2
    2.times{ revise }
  end
end
