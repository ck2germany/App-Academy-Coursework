# == Schema Information
#
# Table name: subs
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  description  :string           not null
#  moderator_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Sub < ApplicationRecord
  validates :title, :description, :moderator_id, presence: true

  has_many :post_subs,
  inverse_of: :sub,
  dependent: :destroy

  has_many :posts,
  through: :post_subs,
  source: :post

  belongs_to :moderator,
  primary_key: :id,
  foreign_key: :moderator_id,
  class_name: :User,
  inverse_of: :subs

  # has_many :posts,
  # primary_key: :id,
  # foreign_key: :sub_id,
  # class_name: :Post


end
