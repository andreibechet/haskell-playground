speller :: [[Char]] -> [Char]
spellOne :: [Char] -> [Char]
joinWords :: [[Char]] -> [Char] 
spellWords :: [[Char]] -> [[Char]]

-- Version 1: just calling functions
-- speller [] = ""
-- speller words = joinWords [spellOne word | word <- words]

-- Version 2: function comprehension
speller = joinWords . spellWords 

spellWords words = map spellOne words 

spellOne [] = ""
spellOne word = [head word] ++ " for " ++ word 

joinWords [] = ""
joinWords words = foldl (\x y -> x ++ ", " ++ y) (head words) (tail words)
