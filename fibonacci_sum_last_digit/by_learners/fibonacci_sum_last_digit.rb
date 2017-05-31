#!/usr/bin/env ruby
# by Andronik Ordian

def fib_sum_last_digit(n)
  f = Array.new(n)
  f[0] = 0
  f[1] = 1
  if n == 0 || n == 1 || n == 2
    return n
  end
  sum = 1
  for i in 2..n
    f[i] = (f[i-1] + f[i-2]) % 10
    sum += f[i]
  end
  return sum % 10
end

if __FILE__ == $0
  n = gets.to_i
  puts "#{fib_sum_last_digit(n)}"
end
