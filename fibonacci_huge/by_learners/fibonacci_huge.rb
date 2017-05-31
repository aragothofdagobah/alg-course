#!/usr/bin/env ruby
# by Andronik Ordian

def fib_huge(n, m)
  a = 1
  b = 1
  for i in 3..n
    c = (a + b) % m
    a = b
    b = c
  end
  return b
end



if __FILE__ == $0
  a,b = gets.split().map(&:to_i)
  puts "#{fib_huge(a,b)}"
end
