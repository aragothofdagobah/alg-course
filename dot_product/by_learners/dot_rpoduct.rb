#!/usr/bin/env ruby
# by Andronik Ordian

def max_dot_product(a, b)
  a = a.sort;
  b = b.sort;
  sum = 0;
  for i in 0..a.length-1
    sum += a[i] * b[i]
  end
  return sum
end

num = STDIN.gets.chomp();
a = STDIN.gets.chomp().split(' ').map { |e| e.to_i }
b = STDIN.gets.chomp().split(' ').map { |e| e.to_i }
puts "#{max_dot_product(a, b)}"
